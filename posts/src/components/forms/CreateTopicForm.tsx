"use client";

import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

export const CreateTopicForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  const { errors } = formState;

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={Boolean(errors?.name?.length)}
              errorMessage={errors?.name?.join(", ")}
            />
            <Textarea
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
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
