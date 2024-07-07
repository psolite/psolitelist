import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


const Notifications = () => {
    return (
        <Card className="m-3">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
                <Link href={"/complex-dashboard/archived"}>Archived</Link>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

export default Notifications;