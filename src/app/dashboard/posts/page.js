"use client"
import { PlusCircleIcon, TrashIcon, NewspaperIcon, PencilIcon } from "@heroicons/react/20/solid";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Card } from "@nextui-org/react";
import { getPosts, deletePost } from "@/app/dashboard/posts/pagefetch";
export default async function page() {
    let {posts} = await getPosts()
    return (
        <div className="w-full flex flex-col gap-2">
            <Card className="flex w-full items-center justify-between flex-row p-3">
                <div>
                    <h1 className="text-3xl">Zarządzanie postami</h1>
                </div>
                <div>
                    <a href="posts/new" className="hover:bg-green-600 bg-green-500 text-custom-gray-900 p-2 rounded-md flex gap-2">Dodaj Post <PlusCircleIcon className="h-6 w-6" /></a>
                </div>
            </Card>
            <div className="rounded-md overflow-hidden">
                <Table aria-label="Tabela zawierająca listę postów"
                       color="primary"
                       selectionMode="single" >
                    <TableHeader>
                       <TableColumn>INDEX</TableColumn>
                       <TableColumn>TYTUŁ</TableColumn>
                       <TableColumn>TAG</TableColumn>
                       <TableColumn>DATA</TableColumn>
                       <TableColumn>OPCJE</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {posts.map((post, index) => (
                            <TableRow key={post.id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.tags.map(tag => <Chip key={tag}>{tag}</Chip>)}</TableCell>
                            <TableCell>{post.date}</TableCell>
                            <TableCell><div className="flex gap-2 items-center">
                                <div>
                                    <a
                                        title="podgląd"
                                        className="bg-green-500 px-2 py-1 rounded-md text-[#18181b] border-2 border-green-500 hover:bg-[#18181b] hover:text-green-500 flex "
                                        href={"/posty/" + post.id}
                                        target="_blank"
                                    >
                                        <NewspaperIcon className="h-5 w-5" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        title="edytuj"
                                        href={"/dashboard/posts/edit/" + post.id}
                                        className="bg-blue-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-blue-500 hover:bg-custom-gray-800 hover:text-blue-500 flex"
                                    >
                                        <PencilIcon  className="h-5 w-5" />
                                    </a>
                                </div>
                                <Popover placement="left" showArrow={true}>
                                    <PopoverTrigger>
                                        <button
                                            title="usuń"
                                            className="bg-red-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-red-500 hover:bg-custom-gray-800 hover:text-red-500"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="flex flex-col gap-2 p-2">
                                            <div>
                                                <p className="text-lg">Na pewno chcesz usunąć ten post?</p>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => deletePost(post.id)}
                                                    className="bg-red-500 px-2 py-1 rounded-md text-[#18181b] border-2 border-red-500 hover:bg-[#18181b] hover:text-red-500 flex gap-2"
                                                >
                                                    usuń
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div></TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}