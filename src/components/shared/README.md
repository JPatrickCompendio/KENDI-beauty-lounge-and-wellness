# Shared/Global Components Library

This folder contains reusable UI components that maintain consistency across all role dashboards (Admin, Doctor, Client).

## Components

### SharedHeader
Universal header component with customizable navigation links and role-based display.

**Props:**
- `navLinks`: Array of navigation links with path and label
- `showLogin`: Boolean to show/hide login button
- `userRole`: Current user role ('admin' | 'doctor' | 'client' | null)

**Usage:**
```tsx
import { SharedHeader } from "@/components/shared/SharedHeader";

<SharedHeader 
  navLinks={[
    { path: "/", label: "Home" },
    { path: "/about", label: "About" }
  ]}
  showLogin={true}
  userRole={null}
/>
```

### SharedFooter
Universal footer component with contact information and social links.

**Usage:**
```tsx
import { SharedFooter } from "@/components/shared/SharedFooter";

<SharedFooter />
```

### SharedProfileForm
Reusable profile form component for all user types.

**Props:**
- `userName`: User's full name
- `userRole`: User's role
- `userEmail`: User's email
- `userContact`: User's contact number
- `onSave`: Callback for save action
- `onUpdatePassword`: Callback for password update

**Usage:**
```tsx
import { SharedProfileForm } from "@/components/shared/SharedProfileForm";

<SharedProfileForm
  userName="Dr. M. Dela Cruz"
  userRole="Doctor"
  userEmail="doctor@kendibeauty.com"
  userContact="0912-345-6789"
  onSave={() => console.log('Saved')}
  onUpdatePassword={() => console.log('Password updated')}
/>
```

### RoleCard
Card component for role selection interface.

**Props:**
- `title`: Role title
- `description`: Role description
- `icon`: Lucide icon component
- `path`: Navigation path
- `gradient`: CSS gradient class (optional)

**Usage:**
```tsx
import { RoleCard } from "@/components/shared/RoleCard";
import { Shield } from "lucide-react";

<RoleCard
  title="Admin"
  description="Full system access"
  icon={Shield}
  path="/dashboard"
  gradient="gradient-primary"
/>
```

## Design System

### Colors (HSL format)
- **Old Rose**: `18 24% 69%` (--old-rose, --primary)
- **Gold**: `45 63% 52%` (--gold, --accent)
- **Soft Pink**: `0 50% 90%` (--soft-pink, --secondary)
- **Accent Gray**: `0 0% 93%` (--accent-gray, --muted)

### Typography
- **Heading Font**: Playfair Display (serif)
- **Body Font**: Poppins (sans-serif)

### Spacing & Consistency
- Card padding: `p-6` or `p-8`
- Border radius: `rounded-md` (1rem base)
- Shadows: Use `shadow-card` or `shadow-elegant` utilities
- Transitions: Use `transition-smooth` utility

### Button States
- Default: `bg-primary text-primary-foreground`
- Hover: `hover:bg-primary/90`
- Active: Uses primary color with higher contrast

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## Integration

All components are designed to work seamlessly with:
- React Router for navigation
- Tailwind CSS for styling
- Shadcn/ui components for UI elements
- Lucide React for icons

## Best Practices

1. Always import from `@/components/shared/` path
2. Use design system tokens instead of hardcoded colors
3. Maintain consistent spacing with Tailwind utilities
4. Follow the component prop interfaces for type safety
5. Keep components focused and reusable
