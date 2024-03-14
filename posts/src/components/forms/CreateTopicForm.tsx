"use client";

import { useFormState } from "react-dom";
import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FormButton, FormInput, FormTextarea } from "@/components";

export const CreateTopicForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  const { errors } = formState;

  return (
    <Popover placement="left">
      <PopoverTrigger className="flex justify-center">
        <Button color="primary" className="mx-auto">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <FormInput
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={Boolean(errors?.name?.length)}
              errorMessage={errors?.name?.join(", ")}
            />
            <FormTextarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={Boolean(errors?.description?.length)}
              errorMessage={errors?.description?.join(", ")}
            />
            {Boolean(errors?._form?.length) && (
              <p className="p-2 bg-red-200 border border-red-400">
                {errors?._form?.join(", ")}
              </p>
            )}
            <FormButton type="submit">Create Topic</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
