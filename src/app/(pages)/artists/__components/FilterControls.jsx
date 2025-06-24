import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


export default function FilterControls({
  filters,
  setFilters,
  getAvailableOptions,
  keys,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4 justify-center mb-6">
      {/* Search Input */}
      <Input
        placeholder="Search by name..."
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
        className="w-full sm:w-64"
      />

      {/* Dynamic Select Filters */}
      {keys.map((key) => (
        <Select
          key={key}
          value={filters[key] || "__all__"}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              [key]: value === "__all__" ? "" : value,
            }))
          }
        >
          <SelectTrigger className="w-full sm:w-48 capitalize">
            <SelectValue placeholder={`All ${key}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="__all__">All {key}</SelectItem>
            {getAvailableOptions(key).map((val) => (
              <SelectItem key={val} value={val}>
                {val}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}

      {/* Clear Filters Button */}
      <Button
        variant="outline"
        className="text-sm w-full sm:w-auto"
        onClick={() =>
          setFilters((prev) =>
            Object.fromEntries(Object.keys(prev).map((k) => [k, ""]))
          )
        }
      >
        Clear All Filters
      </Button>
    </div>
  );
}
