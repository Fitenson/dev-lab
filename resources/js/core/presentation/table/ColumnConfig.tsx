import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";


type ColumnConfig<TData> = {
    accessorKey: keyof TData,
    header?: string;
}


const createColumn = <TData,> ({
    accessorKey,
    header,
}: ColumnConfig<TData>): ColumnDef<TData> => ({
    accessorKey: accessorKey as string,
    filterFn: "includesString",
    enableResizing: true,
    header: ({ column }) => (
        <Button
            variant={"ghost"}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {header ?? String(accessorKey)}
        </Button>
    )
});


export { createColumn };
