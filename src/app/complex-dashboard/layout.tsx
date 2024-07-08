import "server-only";

import { Suspense } from "react";

export default function DashboardLayout({
    children,
    users,
    revenue,
    login,
    notifications,
  }: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  }>) {
    const isLoggedIn = true
    return isLoggedIn ? (
      <div>
          <div>{children}</div>

          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{users}</div>
                <div>
                  <Suspense fallback={<p> Loading ....</p>}>
                    {revenue}
                  </Suspense>
                  </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
          </div>
            
      </div>
    ) : (
        login
    );
  }
  