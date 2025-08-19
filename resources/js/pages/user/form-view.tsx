import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Head, router } from "@inertiajs/react";
import { useForm } from "react-hook-form";

import breadcrumbItems from "@/components/breadcrumb-items";
import AppLayout from "@/layouts/app-layout";
import UserLayout from "@/layouts/user/layout";

import User from "./data/User";
import { UserModel, userSchema } from "./schema/userSchema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TopActionBar from "@/components/custom/top-action-bar";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";
import useShowToast from "@/hooks/use-show-toast";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";


type Props = {
    userData: UserModel
}


export default function UserFormView({ userData }: Props) {
    const user = new User(userData);
    const isLoading = useAppSelector(state => state.loading.global);
    const showToast = useShowToast();


    const breadcrumbs = [
        ...breadcrumbItems,
        { title: user.name || "Create", href: '/' }
    ];


    const userForm = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: user.name || "",
            full_name: user.full_name || "",
            email: user.email || "",
            description: user.description || "",
            address: user.address || "",
        }
    });


    const submit = (data: z.infer<typeof userSchema>) => {
        // const data = userForm.getValues();

        if(user && user?.id) {
            router.patch(`/user/update/${user.id}`, data, {
                onSuccess: () => {
                    showToast('Success', 'User update successfully', 'success');
                },
                onError: () => {
                    showToast('Error', 'Error on update', 'error');
                }
            });
        } else {
            router.post('/user/store', data, {
                onSuccess: () => {
                    showToast('Success', 'Create user successfully', 'success');
                },
                onError: (errors) => {

                    Object.keys(errors).forEach((field) => {
                        if(field in userForm.getValues()) {
                            userForm.setError(field, {
                                type: 'max',
                                message: errors[field]
                            });
                        }
                    });

                    showToast('Error', 'Error on create', 'error');
                }
            });
        }
    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User" />
            <Head title={user.name} />

            <UserLayout>
                <Form {...userForm}>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-start" onSubmit={userForm.handleSubmit(submit)}>
                        <TopActionBar
                            showSave
                            showDelete
                            showBrowse
                            browseTo="/user"
                        />

                        <FormField
                            control={userForm.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={userForm.control}
                            name="full_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={userForm.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={userForm.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Male">Male</SelectItem>
                                                <SelectItem value="Female">Female</SelectItem>
                                                <SelectItem value="Others">Others</SelectItem>
                                                <SelectItem value="Rather not say">Rather not say</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-row col-span-full w-full gap-6 items-start">
                        <FormField
                            control={userForm.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            disabled={isLoading}
                                            rows={4}
                                            style={{  resize: 'vertical', overflowY: 'auto', maxHeight: '4rem' }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={userForm.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            disabled={isLoading}
                                            rows={4}
                                            style={{  resize: 'vertical', overflowY: 'auto', maxHeight: '4rem' }}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        </div>
                    </form>
                </Form>
            </UserLayout>
        </AppLayout>
    );
}
