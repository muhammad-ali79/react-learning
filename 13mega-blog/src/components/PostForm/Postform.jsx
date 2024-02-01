import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Postform({ post }) {
  // watch to continously watch a field
  // setValue to set the value of input
  // control to pass the control further
  const { register, handleSubmit, watch, setValue, control, getValues } =
    // here we give the defaults to check if the user is editing or making new post
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth.userData);

  // method to submit the data to the appwrite
  // here we will have two cases 1. first if the use is updating the existing post then get the previous data and update the post based on the new given data 2.if there is no previous data then create new post and upload the post with data

  const submit = async (data) => {
    // if image is present then upload
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      // delete the previous image
      if (file) appwriteService.deleteFile(post.featuredImage);

      // update the edited post
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      // navigate the user to the post page
      if (dbPost) navigate(`post/${dbPost.$id}`);

      // if user is creating new post
    } else {
      // TODO: for optimze
      // upload image
      const file = await appwriteService.uploadFile(data.image[0]);

      // if image is uploaded then setData
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        // after sending data naviage the user
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(
    () => {
      // here watch method from react-hook-form give two arguments first is the value object where watch is used and second is the name of the field
      const subscription = watch((value, { name }) => {
        if (name === "title") setValue("slug", slugTransform(value.title)); // setValue of slug to the transforem value
      });

      // whatever funcion we use in the useEffect it is reccommend to unsubscribe this funcion for performance
      return () => {
        subscription.unsubscribe();
      };
    },

    // if something changes in the watch method(value of the element where we will attach watch) , slugTranfrom,setValue then
    [watch, slugTransform, setValue]
  );

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          // register is used to register the input field with name of title and validation is set to true its for gathering state so that we can use it later
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default Postform;
