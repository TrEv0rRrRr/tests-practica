import { render, screen } from "@testing-library/vue";
import TaskList from "../UI/TaskList.vue";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Testing the Vue UI", () => {
  test("should render tasks from API", async () => {
    // Arrange
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ["Task 1", "Task 2"],
    } as any);

    // Act
    render(TaskList);

    // Assert
    expect(await screen.findByText("Task 1")).toBeInTheDocument();
    expect(await screen.findByText("Task 2")).toBeInTheDocument();
  });

  test("should render empty list when API returns no tasks", async () => {
    // Arrange
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => [],
    } as any);

    // Act
    render(TaskList);

    // Assert
    await screen.findByRole("list"); // espera a que se renderice el <ul>
    const items = screen.queryAllByRole("listitem"); // para traer todos los listitem (<li>) q existan en el documento
    expect(items.length).toBe(0);
  });

  test("should show loading initially", async () => {
    // Arrange
    vi.spyOn(global, "fetch").mockImplementation(() => new Promise(() => {}));

    // Act
    render(TaskList);

    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
