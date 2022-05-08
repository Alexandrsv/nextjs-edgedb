module default {
    type User {
      required property name -> str {
        constraint exclusive
      ;};
      required property avatar -> str;
    }
}
