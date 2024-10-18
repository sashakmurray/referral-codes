"use client";
import { useRouter } from "next/navigation";

export default function SearchLinksForm() {

    const router = useRouter();

    async function search(formData) {
        router.push(`?query=${formData.get("query")}`);
        // TODO: revalidate path
    }

    return (
        <form action={search}>
            <input type="text" name="query"/>
            <input type="submit" value="Search"/>
            
        </form>
    );
}