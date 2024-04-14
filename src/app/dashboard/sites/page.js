"use client"
import { Card } from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {useSession} from "next-auth/react";
import UnauthorizedError from "../../dashboard/ui/UnauthorizedError";


export default function page() {
    const [subpages, setSubpages] = useState([])
    const { data: session, status } = useSession();
    const getsubpages = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const res = await fetch(`${apiUrl}/api/subpagesall`, {
                method: "GET"
            })
            if (res) {
                const websubpages = await res.json()
                if (websubpages) {
                    setSubpages(websubpages.subpages)
                }
            }
        } catch (error) {
            console.log("Błąd ładowania postów: ", error)
        }
    }
    useEffect(() => {
        getsubpages();
    }, []);


    const updateObjectInTable = (idForUpdate, newValue) => {
        const updatedTable = subpages.map((object) => {
            if (object.id === idForUpdate) {
                return {...object, ...newValue};
            }
            return object;
        });
        return updatedTable
    }
    const switchShare = async (id) => {
        const subpage = subpages.filter(subpg => subpg.id === id)
        const newShareState = {
            title: subpage[0].title,
            path: subpage[0].path,
            share: !subpage[0].share,
            id: subpage[0].id
        }
        const newSubpage = updateObjectInTable(id, newShareState)
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const res = await fetch(`${apiUrl}/api/subpages/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newShareState)
            });

            if (!res.ok) {
                throw new Error("Błąd aktualizowania postu")
            }
            setSubpages(newSubpage)
        } catch (error) {
            console.log(error)
        }



    }
    if (session && session?.user.permission === "administrator") {
        return (
            <div className="flex flex-col gap-2">
                <Card className="flex w-full items-center justify-between flex-row p-3">
                    <div>
                        <h1 className="text-3xl">Zarządzanie podstronami</h1>
                    </div>
                </Card>
                <div>
                    <Table aria-label="Tabela zawiera strony do edytowania" isStriped className="text-lg">
                        <TableHeader>
                            <TableColumn>lp</TableColumn>
                            <TableColumn>nazwa</TableColumn>
                            <TableColumn>ścieżka</TableColumn>
                            <TableColumn>opcje</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {subpages.map((subpage, index) => (
                                <TableRow key={index + subpage.path}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{subpage.title}</TableCell>
                                    <TableCell>{"/" + subpage.path}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button color={subpage.share ? "success" : "warning"}
                                                onClick={() => switchShare(subpage.id)}>{subpage.share ? "publiczna" : "prywatna"}</Button>
                                        <Button as={Link} href={`/dashboard/sites/edit/${subpage.path}`}
                                                color="primary">edytuj</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    } else {
        return (
            <UnauthorizedError />
        )
    }
}
