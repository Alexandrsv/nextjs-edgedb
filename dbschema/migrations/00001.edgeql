CREATE MIGRATION m1sg56fj3on745ybz37jbz52dygmizvc73vlfizhygc47uhyufbnoa
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY avatar -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
  };
};
