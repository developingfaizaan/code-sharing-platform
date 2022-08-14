import { Input, Button, Textarea } from "../components";

const CreatePage = () => {
  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
        Share code snippets in seconds.
      </h1>

      <Input label="Title" type="text" />
      <Input label="Description" type="text" />
      <Input label="Language" type="text" />
      <Input
        label="Tags"
        type="text"
        placeholder="Seprated by comma eg: html, css, js"
      />
      <Textarea label="Your Code Snippet" type="text" />
      <Button>Create a Snippet</Button>
    </main>
  );
};

export default CreatePage;
