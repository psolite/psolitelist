import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Revenue = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return (
        <Card  className="m-3">
            <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

export default Revenue;