# @emre/components

React component library with reusable UI components.

## Installation

### From npm (if published)
```bash
npm install @emre/components
```

### From GitHub
```bash
npm install git+https://github.com/emreklc9/components.git
```

## Usage

```tsx
import { Button, Input } from '@emre/components';

function App() {
  return (
    <div>
      <Input 
        label="Email"
        placeholder="Enter your email"
        iconLeft={<span>📧</span>}
      />
      
      <Button 
        variant="primary" 
        size="md"
        onClick={() => console.log('Clicked!')}
      >
        Click Me
      </Button>
    </div>
  );
}
```

## Components

### Button

A flexible button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `isLoading`: boolean (default: false)
- `iconLeft`: React.ReactNode
- `iconRight`: React.ReactNode
- `fullWidth`: boolean (default: false)
- All standard HTML button attributes

**Example:**
```tsx
<Button variant="primary" size="lg" isLoading={false}>
  Submit
</Button>
```

### Input

An input component with label, error handling, and icon support.

**Props:**
- `label`: string
- `error`: string
- `iconLeft`: React.ReactNode
- `iconRight`: React.ReactNode
- All standard HTML input attributes

**Example:**
```tsx
<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  error="Invalid email"
  iconLeft={<span>📧</span>}
/>
```

## Requirements

- React >= 18.0.0
- Tailwind CSS (for styling)

## License

MIT
