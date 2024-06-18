"use client";
import { telegramFormSchema } from "@/lib/Validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const BannerWallet = ({ setShowRecipt, showrecipt }: any) => {
  const handleButtonClick = () => {
    setShowRecipt(false);
  };

  const form = useForm<z.infer<typeof telegramFormSchema>>({
    resolver: zodResolver(telegramFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof telegramFormSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className={`${showrecipt ? "" : "hidden"}`}>
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Trending topic of this week
          </h2>
        </div>

        <div
          className={`mx-auto my-4 ml-5 mt-10 max-w-7xl gap-5 overflow-hidden  rounded-3xl bg-black bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5`}
        >
          <div className="overflow-hidden rounded-3xl bg-[#020000] ">
            <div className="px-10 py-3 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-white">Volume Bot</h2>
                <ChevronsRight className="size-7 text-white" />
              </div>
              <p className="mt-2 line-clamp-2 py-6 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                quaerat voluptatem cumque voluptate, blanditiis sunt
                necessitatibus sapiente hic sequi veritatis esse laboriosam
                aspernatur excepturi obcaecati iure. Porro cupiditate iste rerum
                debitis eaque ea sequi amet iusto aliquid, itaque odit, placeat
                atque necessitatibus expedita. Beatae iure ipsum ratione, hic
                doloremque eum.
              </p>
              <div className="flex w-full flex-col pt-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Wallet address{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jffjwfhquhwiojfq`984mffmfnefen"
                              {...field}
                              className="rounded-full bg-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Submit Your Transaction Address{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Paste submit transaction address here "
                              type="text"
                              {...field}
                              className="rounded-full bg-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-8 text-white">
                      <Image
                        src="/assets/images/qrcode.png"
                        width={200}
                        height={200}
                        alt="qrcode"
                      />
                      <p className="hidden sm:block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos et magni, suscipit eaque recusandae quidem esse
                        maiores. Excepturi tempora beatae delectus eum
                        praesentium adipisci provident iste quidem deleniti,
                        fuga architecto odit. Debitis vitae enim doloribus porro
                        dolorum illum illo atque corporis cumque placeat
                        pariatur iusto autem est, mollitia nulla a non obcaecati
                        et repellendus labore! Omnis suscipit et pariatur
                        consequatur!
                      </p>
                    </div>

                    <Button
                      onClick={handleButtonClick}
                      type="submit"
                      className="!mt-10 flex w-full rounded-full bg-[#115cf3ec] px-10 hover:bg-[#1f9fef]"
                    >
                      Pay
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWallet;
