CREATE TYPE public.token AS (
 password TEXT, email TEXT
);

CREATE TYPE public.login_response AS (
  jwt_token public.token,
  user_details  json
);



CREATE OR REPLACE FUNCTION public.login(email text, password text) 
RETURNS public.login_response AS $$

DECLARE
 user_details public.users;
  user_json json;
BEGIN
-- -------------------------------------------
  IF login.email IS NULL THEN
    RAISE EXCEPTION 'email required';
  END IF;

  IF login.password IS NULL THEN
    RAISE EXCEPTION 'password required';
  END IF;

  SELECT a.*
  INTO user_details
  FROM public.users as a
  WHERE a.mail_address = login.email;

  IF NOT user_details.password =  login.password THEN
    RAISE EXCEPTION 'Invalid email or password';
  END IF;

   user_json = json_build_object(
    'user_id', user_details.user_id,
'address', user_details.address,
'mail_address', user_details.mail_address,
'phone_number', user_details.phone_number,
'image', user_details.image,
'history', user_details.history,
   );
   RETURN ROW(
    ROW(user_details.email,
      user_details.password)::public.token,
      user_json
    )::public.login_response;

END;
$$ LANGUAGE plpgsql;
