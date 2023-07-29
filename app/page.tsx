import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editProfile } from "@/server-actions/edit-profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-6 w-full ">
      <Card className="max-w-3xl m-auto mt-12">
        <CardHeader>
          <CardTitle className="flex">
            <span className="flex-1">Bem vindo ao sistema, João Bibiano</span>

            <Dialog>
              <DialogTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/joaobibiano.png" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form action={editProfile}>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" name="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        name="username"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription>
            Clique em sua foto para ver as configurações do seu perfil
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end"></CardContent>
      </Card>
    </main>
  );
}
