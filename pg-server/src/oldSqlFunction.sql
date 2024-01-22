
CREATE OR REPLACE FUNCTION public.login(email text, password text) 
RETURNS public.login_response AS $$

DECLARE
  user_details public.users;
  tp_details public.tps;
  admin_details public.admins;
  user_json json;
  user_role text; 
BEGIN


  IF email IS NULL THEN
    RAISE EXCEPTION '22001' USING MESSAGE = 'Email is required';
  END IF;

  IF password IS NULL THEN
    RAISE EXCEPTION '22001' USING MESSAGE = 'Password is required';
  END IF;

  -- Check if email is equal to '8429693@GMAIL.COM'
  IF email = '8429693@gmail.com' THEN
    -- If yes, retrieve admin details
    SELECT a.*
  INTO admin_details
  FROM public.admins as a
  WHERE a.email = login.email;

    IF NOT FOUND THEN
      RAISE EXCEPTION '23505' USING MESSAGE = 'Invalid email or password';
    END IF;

    IF NOT admin_details.password = password THEN
      RAISE EXCEPTION '22001' USING MESSAGE = 'Invalid email or password';
    END IF;

    user_role := 'ADMIN'; -- Set user role to ADMIN

    user_json = json_build_object(
      'admin_id', admin_details.admin_id, 
      'name', admin_details.name,
      'address', admin_details.address,
      'email', admin_details.email,
      'phone', admin_details.phone,
      'image', admin_details.image,
      'history', admin_details.history
    );

  ELSE
    -- Check in public.users
    SELECT a.*
  INTO user_details
  FROM public.users as a
  WHERE a.email = login.email;

    IF NOT FOUND THEN
      -- Check in public.tps
      SELECT a.*
  INTO tp_details
  FROM public.tps as a
  WHERE a.email = login.email;

      IF NOT FOUND THEN
        RAISE EXCEPTION '23505' USING MESSAGE = 'Invalid email or password';
      END IF;

      IF NOT tp_details.password = password THEN
        RAISE EXCEPTION '22001' USING MESSAGE = 'Invalid email or password';
      END IF;

      user_role := 'TP'; -- Set user role to TP

      user_json = json_build_object(
        'tp_id', tp_details.tp_id,
        'name', tp_details.name,
        'address', tp_details.address,
        'email', tp_details.email,
        'phone', tp_details.phone,
        'profession', tp_details.profession,
        'subSpecialty', tp_details.subSpecialty,
        'image', tp_details.image,
        'Experience', tp_details.Experience,
        'price_rating', tp_details.price_rating,
        'reliability_rating', tp_details.reliability_rating,
        'comments', tp_details.comments,
        'orders', tp_details.orders,
        'history', tp_details.history,
        'about', tp_details.about,
        'available', tp_details.available
      );

    ELSE
      -- User found in public.users
      IF NOT user_details.password = password THEN
        RAISE EXCEPTION '22001' USING MESSAGE = 'Invalid email or password';
      END IF;

      user_role := 'USER'; -- Set user role to USER

      user_json = json_build_object(
        'user_id', user_details.user_id,
        'name', user_details.name,
        'address', user_details.address,
        'email', user_details.email,
        'phone', user_details.phone,
        'image', user_details.image,
        'history', user_details.history
      );
    END IF;
  END IF;

  -- Create JWT token payload with user role
  RETURN ROW(
    ROW(email, password, user_role)::public.token,
    user_json
  )::public.login_response;

END;
$$ LANGUAGE plpgsql;