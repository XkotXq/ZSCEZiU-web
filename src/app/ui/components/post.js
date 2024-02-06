import {Card, CardHeader, CardBody, Image, Link, Chip} from "@nextui-org/react";


export default function Post({ id, title, tags, date, img, desc}) {
    return (
        <Card shadow="sm" className="w-[400px] flex flex-col" href={"/posty/" + id} as={Link} isPressable>
            <CardHeader className="grow flex gap-2">
                <div className="flex h-full flex-col justify-between w-full">
                    <div>
                        <h3 className="sm:text-lg text-base font-medium">{title}</h3>
                    </div>
                    <div>
                        <p className=" text-custom-gray-300 font-medium">Dodany {date}</p>
                    </div>
                </div>
                <div className="flex justify-end items-start h-full">
                    {tags.map(tag => (<Chip key={tag} color="default" variant="shadow">{tag}</Chip>))}
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <Image
                            shadow="sm"
                            radius="sm"
                            alt={title}
                            className="w-full object-cover h-[200px]"
                            src={img}
                        />
                    </div>
                    <div className="w-1/2">
                        <p>{desc}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}