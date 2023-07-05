import React from "react";

const Form = ({ type, post, submitting, handleSubmit,setpost }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor=""><span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
        <textarea className="form_textarea" value={post.prompt} onChange={(e)=>setpost({...post,prompt:e.target.value})} placeholder="Write your prompt here..." required />
        </label>
        <label htmlFor=""><span className="font-satoshi font-semibold text-base text-gray-700">Tag{` `} <span className="font-normal">(#product, #webdevelopment, #idea)</span></span>
        <textarea className="form_textarea" value={post.prompt} onChange={(e)=>setpost({...post,prompt:e.target.value})} placeholder="Write your prompt here..." required />
        </label>
      </form>
    </section>
  );
};

export default Form;
