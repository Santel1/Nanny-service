import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import { Loader } from "./components/Loader";
import PrivatRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const NannyPage = lazy(() => import("./pages/NannyPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/nanny" element={<NannyPage />} />
            <Route
              path="/favorites"
              element={
                <PrivatRoute>
                  <FavoritesPage />
                </PrivatRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
