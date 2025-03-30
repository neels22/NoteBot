"use client"
import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Loginpage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full">
        <CardHeader className="mb-4 flex items-center justify-center">
          <CardTitle className="text-center text-3x font-bold" style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Login</CardTitle>
        </CardHeader>

        <AuthForm type="login"/>
      </Card>

    </div>
  );
};

export default Loginpage;
