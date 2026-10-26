import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: "Jon Doe" + i,
      birthday: "1978-09-20",
      salary: 120000,
    };
    await createEmployee(employee);
    // try {
    //   await createEmployee({
    //     name: "Jon Doe" + i,
    //     birthday: "1978-09-20",
    //     salary: 120000,
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
}
