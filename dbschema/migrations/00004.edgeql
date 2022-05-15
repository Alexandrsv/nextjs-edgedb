CREATE MIGRATION m16dzrdo6gdb3modonntk4bukqnjnthbbbqhp4dzy5ltanv7jen72q
    ONTO m1nq4kc6idof7rpxccwhk6rjhzchbsqzi6k74f5mllam5ljwmmchzq
{
  ALTER TYPE default::User {
      CREATE PROPERTY nameLen := (std::len(default::User.name));
  };
};
