module default {
    type User {
      required property name -> str {
        constraint exclusive
      ;};
      required property avatar -> str;
      property nameUpper := str_upper(.name);
      property nameLen := len(.name);
    }
}
