CREATE MIGRATION m1yjntdt2pjzwb53pdu2tqheeanp2w2j7lvjhndcnwpk6v33ocehwq
    ONTO m16dzrdo6gdb3modonntk4bukqnjnthbbbqhp4dzy5ltanv7jen72q
{
  ALTER TYPE default::User {
      ALTER PROPERTY nameLen {
          USING (std::len(.name));
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY nameUpper {
          USING (std::str_upper(.name));
      };
  };
};
