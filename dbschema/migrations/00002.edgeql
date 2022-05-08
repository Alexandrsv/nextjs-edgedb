CREATE MIGRATION m12dahqwhwt2tqdkpi7u6xrxtdtvri737yj6iv4xnoqb57twdgvola
    ONTO m1sg56fj3on745ybz37jbz52dygmizvc73vlfizhygc47uhyufbnoa
{
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
