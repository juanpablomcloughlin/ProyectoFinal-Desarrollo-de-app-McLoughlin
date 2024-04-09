import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("sessions.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertSession = ({ email, localId, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessions WHERE localId = ?;",
        [localId],
        (_, result) => {
          if (result.rows.length > 0) {
          } else {
            tx.executeSql(
              "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);",
              [localId, email, token],
              (_, result) => resolve(result),
              (_, error) => reject(error)
            );
          }
        },
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = ({ localId }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sessions WHERE localId = ?",
        [localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};
