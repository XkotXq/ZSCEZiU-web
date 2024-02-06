import {Card, CardHeader, CardBody, Chip, Skeleton} from "@nextui-org/react";


export default function Skeletonpost() {
    return (
        <Card shadow="sm" className="w-[400px] flex flex-col">
            <CardHeader className="grow flex gap-2">
                <div className="flex h-full flex-col justify-between w-full gap-2">
                    <Skeleton className="rounded-lg">
                    <div className="rounded-lg h-8"></div>
                    </Skeleton>
                    <Skeleton className="rounded-lg">
                        <div className="h-6 w-full">
                        </div>
                    </Skeleton>
                </div>
                <div className="flex justify-end items-start h-full">
                    <Skeleton className="rounded-lg">
                    <div className="w-16 h-6"></div>
                    </Skeleton>
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex gap-2 w-full">
                    <Skeleton className="rounded-lg w-1/2">
                        <div className="w-full h-[200px]">
                        </div>
                    </Skeleton>
                    <Skeleton className="rounded-lg w-1/2">
                        <div className="w-full">
                        </div>
                    </Skeleton>
                </div>
            </CardBody>
        </Card>
    )
}