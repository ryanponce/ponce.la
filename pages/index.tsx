import Link from "next/link";
import React from "react";
import { Anchor } from "../components/Anchor";

export default function IndexPage() {
  return (
    <div>
      <p className="font-medium text-xl">🌮 Howdy, I'm Ryan.</p>

      <p className="mt-4">
        I'm a software engineer, amateur taquero, and urban explorer. I live
        Glassell Park, a neighborhood in Los Angeles. Right now, I lead front
        end engineering at{" "}
        <Anchor href="https://saytechnologies.com">Say</Anchor>.
      </p>

      <p className="mt-4">
        You can learn more{" "}
        <Link href="/about" passHref={true}>
          <Anchor>about me here.</Anchor>
        </Link>
      </p>
    </div>
  );
}
