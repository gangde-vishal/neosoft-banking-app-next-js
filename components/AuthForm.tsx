"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with AppWrite and Create Plaid Token
      if (type === "sign-up") {
        // const newUser = await signUp(data);
        // setUser(newUser)
      }

      if (type === "sign-in") {
        // const response = await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // if (response) router.push("/");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" alt="Logo" width={34} height={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            NeoSoft
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-in" ? (
                <>
                  <CustomInput
                    control={form.control}
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    label="Email"
                  />
                  <CustomInput
                    control={form.control}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                  />
                </>
              ) : (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      type="text"
                      placeholder="Ex: Vishal"
                      label="First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      type="text"
                      placeholder="Ex: Gangde"
                      label="Last Name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    label="Email"
                  />
                  <CustomInput
                    control={form.control}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      type="text"
                      placeholder="Ex: Mumbai"
                      label="State"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      type="number"
                      placeholder="Ex: 450331"
                      label="Postal Code"
                    />
                  </div>
                  <div className="flex gap-6">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      type="date"
                      placeholder="yyyy-mm-dd"
                      label="Date Of Birth"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      type="number"
                      placeholder="ex: 1234"
                      label="SSN"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    type="text"
                    placeholder="Ex: 321,gurunanak word,burhanpur"
                    label="Address"
                  />
                </>
              )}

              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}{" "}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
