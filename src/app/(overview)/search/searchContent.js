// pages/search.js

// Funkcja do pobierania danych z API
const getContent = async (search) => {
    const res = await fetch(`http://localhost:3000/api/search?q=${search}`);
    return res.json();
};

// Komponent strony
export default function SearchContent({ data, query }) {
    console.log(data);
    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
    );
}

// Funkcja do pobierania danych po stronie serwera
export async function getServerSideProps(context) {
    const { query } = context; // Uzyskanie obiektu query z kontekstu
    const search = query.q || ''; // Pobranie parametru q z query
    const data = await getContent(search) || []; // Pobranie danych z API

    return {
        props: {
            data, // Przekazanie danych do komponentu
            query: search, // Przekazanie parametru zapytania do komponentu
        },
    };
}
