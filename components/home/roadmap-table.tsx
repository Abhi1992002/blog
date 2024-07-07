import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

enum StatusEnum {
    Done = "Done",
    InProgress = "In Progress",
    NotStarted = "Not Started"

}

export const RoadmapTable2 = () => {
    return (
        <div className={"w-[100%]"}>
            <div className={"w-[100%] grid grid-cols-2"}>
                <div className={"col-span-1"}>
                    <h3 className={"text-lg font-para font-normal text-center"}>
                        Name
                    </h3>
                </div>
                <div className={"col-span-1"}>
                    <h3 className={"text-lg font-para font-normal"}>
                        Status
                    </h3>
                </div>
            </div>
            <div className={"w-[100%] h-[500px] grid grid-cols-2 "}>
                <div className={"col-span-1"}>
                    <h3 className={"text-lg font-para font-normal"}>
                        Name
                    </h3>
                </div>
                <div className={"col-span-1"}>
                    <h3 className={"text-lg font-para font-normal"}>
                        Status
                    </h3>
                </div>
            </div>
        </div>
    )
}

export const RoadmapTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className={"w-[30%]"}>Status</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody >
                    <TableRow>
                        <TableCell>HonoJS : A great framework 🚀</TableCell>
                        <TableCell><Status status={StatusEnum.Done} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Docker: Create a Local environment in your machine, Docker: Create a Local environment in your machine </TableCell>
                        <TableCell><Status status={StatusEnum.InProgress} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>HonoJS : A great framework</TableCell>
                        <TableCell><Status status={StatusEnum.NotStarted} /></TableCell>
                    </TableRow> <TableRow>
                    <TableCell>HonoJS : A great framework</TableCell>
                    <TableCell><Status status={StatusEnum.InProgress} /></TableCell>
                </TableRow> <TableRow>
                    <TableCell>HonoJS : A great framework</TableCell>
                    <TableCell><Status status={StatusEnum.InProgress} /></TableCell>
                </TableRow>
                </TableBody>


        </Table>

    )
}

const Status = ({ status }: { status: StatusEnum }) => {

    if (status === StatusEnum.Done) {
        return (
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className={"text-green-200"}>{status}</p>
            </div>
        )
    }

    if (status === StatusEnum.InProgress) {
        return (
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <p className={"text-yellow-100"}>{status}</p>
            </div>
        )
    }

    if (status === StatusEnum.NotStarted) {
        return (
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                <p>{status}</p>
            </div>
        )
    }

}