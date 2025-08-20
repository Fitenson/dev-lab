import { IoMdRefresh } from "react-icons/io";
import { Button } from "@/components/ui/button";


interface RefreshButtonProps {
    onRefresh: () => void;
}


const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
    return (
        <Button
            variant={"outline"}
            className="cursor-pointer"
            onClick={onRefresh}
        >
            <IoMdRefresh size={32} />
        </Button>
    );
}


export default RefreshButton;
