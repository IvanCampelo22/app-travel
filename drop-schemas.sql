SET search_path = _global, pg_catalog;

DROP FUNCTION IF EXISTS drop_all;

CREATE OR REPLACE FUNCTION drop_all() RETURNS VOID AS $$
  DECLARE schemas RECORD; 
  BEGIN
    FOR schemas IN 
    SELECT DISTINCT(schema_name)
    FROM information_schema.schemata
    where schema_name not in ('pg_catalog', 'information_schema', 'public', 'pg_toast')
    LOOP
      EXECUTE format('DROP SCHEMA %I CASCADE', schemas.schema_name);
    END LOOP;
    RETURN; 
  END;
  $$ LANGUAGE plpgsql;

SELECT drop_all();