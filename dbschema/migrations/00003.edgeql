CREATE MIGRATION m1nq4kc6idof7rpxccwhk6rjhzchbsqzi6k74f5mllam5ljwmmchzq
    ONTO m12dahqwhwt2tqdkpi7u6xrxtdtvri737yj6iv4xnoqb57twdgvola
{
  ALTER TYPE default::User {
      CREATE PROPERTY nameUpper := (std::str_upper(default::User.name));
  };
};
