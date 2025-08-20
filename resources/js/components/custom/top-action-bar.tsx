import SaveButton from "./button/save-button";
import DeleteButton from "./button/delete-button";
import BrowseButton from "./button/browse-button";
import CreateButton from "./button/create-button";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";
import { Table } from "@tanstack/react-table";
import ColumnChooserButton from "./button/column-chooser-button";
import RefreshButton from "./button/refresh-button";


interface ActionButton {
    to?: string;
    action?: () => void;
}


interface TopActionBarProps<TData> {
    table?: Table<TData>;
    createAction?: ActionButton;
    saveAction?: ActionButton;
    browseAction?: ActionButton;
    deleteAction?: ActionButton;
    refreshAction?: ActionButton;
}


export default function TopActionBar <TData> ({
    table,
    createAction,
    saveAction,
    browseAction,
    deleteAction,
    refreshAction,
}: TopActionBarProps<TData>) {
    const isLoading = useAppSelector(state => state.loading.global);


    return(
        <div className="flex items-center bg-background dark:bg-background rounded-md my-2 mx-2 mb-4 shadow-sm gap-2 col-span-full">
            {createAction && createAction.to && <CreateButton to={createAction.to} disabled={isLoading} />}
            {saveAction && <SaveButton disabled={isLoading} />}
            {deleteAction && deleteAction.action && <DeleteButton disabled={isLoading} onDelete={deleteAction.action} />}
            {browseAction && <BrowseButton to={browseAction.to ?? ''} disabled={isLoading} />}

            <div className="flex ml-auto gap-2">
                {refreshAction && refreshAction.action && <RefreshButton onRefresh={refreshAction.action} />}
                {table && <ColumnChooserButton table={table} />}
            </div>
        </div>
    );
}
