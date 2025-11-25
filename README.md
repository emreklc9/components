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
import { Button, Input, Text } from '@emre/components';

function App() {
  return (
    <div>
      <Text variant="heading" size="2xl" weight="bold">
        Welcome
      </Text>
      
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

### Text

A flexible text component with multiple variants, sizes, and styling options.

**Props:**
- `as`: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' (default: 'p')
- `variant`: 'body' | 'caption' | 'heading' | 'subheading' (default: 'body')
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'default' | 'muted' | 'primary' | 'secondary' | 'error' | 'success' (default: 'default')
- `align`: 'left' | 'center' | 'right' | 'justify'
- `truncate`: boolean (default: false)
- All standard HTML paragraph attributes

**Example:**
```tsx
<Text variant="heading" size="2xl" weight="bold" color="primary">
  Hello World
</Text>

<Text variant="body" color="muted" align="center">
  This is a centered muted text
</Text>
```

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
