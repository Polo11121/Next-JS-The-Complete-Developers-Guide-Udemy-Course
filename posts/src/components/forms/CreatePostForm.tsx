"use client";

import { useFormState } from "react-dom";
import { createPost } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { FormButton, FormInput, FormTextarea } from "@/components";

type CreatePostFormProps = {
  topicName: string;
};

export const CreatePostForm = ({ topicName }: CreatePostFormProps) => {
  const [formState, action] = useFormState(createPost.bind(null, topicName), {
    errors: {},
  });

  const { errors } = formState;

  return (
    <Popover placement="left">
      <PopoverTrigger className="flex justify-center">
        <Button color="primary" className="mx-auto">
          Create a post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <FormInput
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={Boolean(errors?.title?.length)}
              errorMessage={errors?.title?.join(", ")}
            />
            <FormTextarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={Boolean(errors?.content?.length)}
              errorMessage={errors?.content?.join(", ")}
            />
            {Boolean(errors?._form?.length) && (
              <p className="p-2 bg-red-200 border border-red-400">
                {errors?._form?.join(", ")}
              </p>
            )}
            <FormButton type="submit">Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
