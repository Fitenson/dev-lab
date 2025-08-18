import { Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/layouts/auth-layout';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useRegisterForm } from './form/registerForm';
import { useAppSelector } from '@/core/presentation/store/useAppSelector';


export default function Register() {
    const registerForm = useRegisterForm();
    const { submit, handleSubmit, control } = registerForm;
    const isLoading = useAppSelector(state => state.loading.global);


    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <Form {...registerForm}>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
                    <section className="grid gap-3">
                        <FormField
                            control={control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your name"
                                            disabled={isLoading}
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your email"
                                            disabled={isLoading}
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your password"
                                            disabled={isLoading}
                                            type="password"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="password_confirmation"
                            render={({ field }) => (
                                <FormItem className="grid gap-2">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Confirm your password"
                                            disabled={isLoading}
                                            type="password"
                                            required
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </section>

                    <Button type="submit" className="my-4 w-full">
                        {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Register account
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <TextLink href={route('login')} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>
                </form>
            </Form>
        </AuthLayout>
    );
}
