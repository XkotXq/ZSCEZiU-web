"use client";
import Post from "@/app/dashboard/ui/post/post";
import {PlusCircleIcon, TrashIcon} from "@heroicons/react/20/solid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useEffect, useState} from "react";
import axios from "axios";

export default function page() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/posts")
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log("błąd")
            })
    }, []);
    const handleDeletePost = (id) => {

        axios
            .delete(`http://localhost:3001/api/posts/${id}`)
            .then(res => {
                setPosts(posts.filter(post => post.id !== id))
            })
    }



    const theme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#080808',
                paper: '#080808',
            },
            text: {
                primary: 'white',
            },
        },
    });
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex w-full items-center justify-between bg-custom-gray-900 p-3 rounded-md">
                <div>
                    <h1 className="text-3xl">Zarządzanie postami</h1>
                </div>
                <div>
                    <a href="posts/new" className="hover:bg-green-600 bg-green-500 text-custom-gray-900 p-2 rounded-md flex gap-2">Dodaj Post <PlusCircleIcon className="h-6 w-6" /></a>
                </div>
            </div>
            <div className="rounded-md overflow-hidden">
                <ThemeProvider theme={theme}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth:640}} aria-label={"simple table"}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>TYTUŁ</TableCell>
                                    <TableCell align="center">TAGI</TableCell>
                                    <TableCell>DATA</TableCell>
                                    <TableCell align="center">OPCJE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    posts.map((post, index) => (
                                        <TableRow key={post.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{post.title}</TableCell>
                                            <TableCell>{post.tags.map(tag => <div key={tag} className="rounded-full text-center bg-white text-custom-gray-900 text-xs px-2 py-1 font-medium">{tag}</div>)}</TableCell>
                                            <TableCell>{post.date}</TableCell>
                                            <TableCell>
                                                <div className="flex gap-2 justify-center items-center">
                                                    <a
                                                        href={"/dashboard/posts/edit/" + post.id}
                                                        className="hover:bg-blue-500 px-2 py-1 rounded-md hover:text-custom-gray-800 border-2 border-blue-500 bg-custom-gray-800 text-blue-500"
                                                    >
                                                        edytuj
                                                    </a>
                                                    <button
                                                        className="bg-red-500 px-2 py-1 rounded-md text-custom-gray-800 border-2 border-red-500 hover:bg-custom-gray-800 hover:text-red-500"
                                                        onClick={() => handleDeletePost(post.id, post.title)}
                                                    >
                                                        <TrashIcon className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </ThemeProvider>
            </div>
        </div>
    )
}