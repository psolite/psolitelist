import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


const ArchivedNotifications = () => {
    return (
        <Card className="m-3">
            <CardHeader>
                <CardTitle>Archived Notifications</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
                <Link href={"/complex-dashboard"}>Default</Link>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

export default ArchivedNotifications;