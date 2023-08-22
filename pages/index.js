import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Head from 'next/head';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="bg-black h-screen p-20 flex space-x-3 justify-center items-center">
        <button onClick={() => setDialogOpen(true)} className="btn">
          Toggle
        </button>
      </main>

      {dialogOpen && (
        <Dialog
          className="relative z-10"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-md p-5 rounded bg-white">
              {/* <Dialog.Title>Uncomment it and the bug will disappear </Dialog.Title> */}
              <h1>Hello, I'm content!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.
              </p>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
