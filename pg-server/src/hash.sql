-- Active: 1706197370280@@dpg-cmp80n6g1b2c73f9qvu0-a.oregon-postgres.render.com@5432@clickfix_pcb9@public

CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA public;

SELECT * FROM users

CREATE SCHEMA u


CREATE TYPE recipes_schema.login_respons AS
(
  jwt_token recipes_schema.token,
  user_details json
);
ALTER TYPE recipes_schema.login_respons
    OWNER TO lhihntov;




CREATE TYPE recipes_schema.token AS
(
  password text,
  email text,
  isadmin boolean
);

ALTER TYPE recipes_schema.token
    OWNER TO lhihntov;



CREATE TRIGGER password_encrypt
BEFORE INSERT ON recipes_schema.users
FOR EACH ROW
EXECUTE PROCEDURE recipes_schema.password_encrypt();


CREATE OR REPLACE FUNCTION recipes_schema.password_encrypt()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN
  NEW.password = recipes_schema.pgp_sym_encrypt(NEW.password, 'secret_key');
  RETURN NEW;
END;
$BODY$;



ALTER FUNCTION recipes_schema.password_encrypt()
    OWNER TO lhihntov;
CREATE OR REPLACE FUNCTION recipes_schema.decrypt_password_function(
  encrypted_password text)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
   decrypted_password text;
BEGIN
  SELECT recipes_schema.pgp_sym_decrypt(encrypted_password::bytea, 'secret_key')
  INTO decrypted_password;
  IF decrypted_password IS NULL THEN
    RAISE EXCEPTION 'Failed to decrypt password';
  END IF;
  RETURN decrypted_password;
END;
$BODY$;

ALTER FUNCTION recipes_schema.decrypt_password_function(text)
    OWNER TO lhihntov;



CREATE OR REPLACE FUNCTION recipes_schema.login(
  email text,
  password text)
    RETURNS recipes_schema.login_respons
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
declare
  user_details recipes_schema.users;
  password_hash text;
  user_json json;
begin
  select recipes_schema.decrypt_password_function(recipes_schema.users.password)
   into password_hash
   FROM recipes_schema.users
   where recipes_schema.users.email = login.email;
  select a.* into user_details
    from recipes_schema.users as a
    where a.email = login.email;
  IF password_hash IS NULL THEN
    RAISE EXCEPTION 'password null Invalid email or password';
  END IF;
  if not login.password = password_hash then
  RAISE EXCEPTION 'Invalid email or password';
  end if;
    user_json = json_build_object(
    'userName', user_details.user_name,
    'isAdmin', user_details."isAdmin",
    'reviews', user_details.reviews,
    'shared', user_details.shared,
    'createdAt', user_details."createdAt",
    'email', user_details.email,
    'userId', user_details.user_id
  );
  return row (
  row(
    user_details.password,
    user_details.email,
    user_details."isAdmin"
  )::recipes_schema.token,
    user_json
    )::recipes_schema.login_respons;
end;
$BODY$;
ALTER FUNCTION recipes_schema.login(text, text)
    OWNER TO lhihntov;
    