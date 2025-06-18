import { render, fireEvent } from "@testing-library/vue";
import UserTable from "../src/components/UserTable.vue";
import type { User } from "../src/types";

describe("UserTable", () => {
  const users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "1", lng: "2" },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];

  it("renders user rows and headers", () => {
    const { getByText } = render(UserTable, { props: { users } });
    expect(getByText("Name / Email")).toBeTruthy();
    expect(getByText("Leanne Graham")).toBeTruthy();
    expect(getByText("Sincere@april.biz")).toBeTruthy();
    expect(getByText("hildegard.org")).toBeTruthy();
  });

  it("emits userClick when a row is clicked", async () => {
    const { getByText, emitted } = render(UserTable, { props: { users } });
    await fireEvent.click(getByText("Leanne Graham"));
    expect(emitted().userClick).toBeTruthy();
    expect(emitted().userClick[0][0].name).toBe("Leanne Graham");
  });

  it("emits deleteUser when delete button is clicked", async () => {
    const { getByLabelText, emitted } = render(UserTable, { props: { users } });
    await fireEvent.click(getByLabelText("Delete user"));
    expect(emitted().deleteUser).toBeTruthy();
    expect(emitted().deleteUser[0][0]).toBe(1);
  });
});
