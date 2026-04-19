# Lifting State & Context – My Notes

## Task 2: Understanding the decision

### Why could you not just hold the state in TemperatureInput?

If the temperature state lived inside `TemperatureInput`, then `TemperatureDisplay` would have no way to access that value. React data flows one-way (parent to child via props). Without lifting state up to a common parent (`TemperaturePage`), the two sibling components cannot share the same piece of data. Holding state in one child would make it invisible to the other child.

### What is the "lowest common ancestor" rule?

The "lowest common ancestor" rule says: place shared state in the closest parent component that sits above **all** components that need access to that state. In our case, `TemperaturePage` is the parent of both `TemperatureInput` and `TemperatureDisplay`, so it's the correct place. Going higher (e.g., `App`) would also work but is unnecessary and adds complexity.

### When does lifting state up become painful?

Lifting state up becomes painful when:

- The component tree is deep and many intermediate components have to pass props they don't use (prop drilling).
- You need to lift state several levels, and the parent becomes bloated with unrelated state.
- Multiple components on different branches need the same state, forcing you to lift it to a very high ancestor, which then passes it down through many levels that don't care about it.

---

## Task 4: When NOT to use Context

### What problem does Context solve that prop drilling does not?

Context solves the "prop drilling" problem – passing data through many intermediate components that don't need the data themselves. With Context, a deeply nested component can consume a value directly without requiring every parent in between to receive and forward that value as a prop.

### When is prop drilling fine and Context unnecessary?

Prop drilling is fine when:

- The data only passes through **one or two levels** of components.
- The intermediate components are already tightly coupled (e.g., a custom component library).
- You want **explicit data flow** for readability and debugging.
  Adding Context would be over-engineering and makes the data flow implicit, which can hide where a value comes from.

### Why is "global state for everything" an anti-pattern?

"Global state for everything" is an anti-pattern because:

- It makes components **less reusable** – they become coupled to a global store.
- It **obscures data dependencies** – it's not obvious which components use which pieces of state.
- It can cause **unnecessary re-renders** – a global state change might re-render many components even if they don't care about that specific part.
- It **complicates testing** – you have to wrap every component in providers even for simple unit tests.
- It **reduces maintainability** – new developers can't easily see where state is being read or modified.

**Golden rule:** Use local state first, lift only when needed, use Context only for truly global concerns (theme, user session, language) that don't change very often.
