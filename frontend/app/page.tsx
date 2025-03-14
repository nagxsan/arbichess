import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { tools } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-20 px-12 py-8">
      {tools.map((tool, idx) => (
        <Drawer key={idx}>
          <DrawerTrigger asChild>
            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {tool.cardTitle}
                </CardTitle>
                <CardDescription className="leading-7 [&:not(:first-child)]:mt-6">
                  {tool.cardDescription}
                </CardDescription>
              </CardHeader>
            </Card>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-6xl">
              <DrawerHeader>
                <DrawerTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {tool.drawerTitle}
                </DrawerTitle>
                <DrawerDescription className="leading-7 [&:not(:first-child)]:mt-6">
                  {tool.drawerDescription}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="flex flex-row justify-between">
                <Link href={tool.pagePath} className="w-full">
                  <Button className="w-full max-w-xl cursor-pointer">
                    Next
                  </Button>
                </Link>
                <DrawerClose asChild className="w-full max-w-lg cursor-pointer">
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
