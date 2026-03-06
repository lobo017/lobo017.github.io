'use client';

/**
 * SplineWrapper - reusable Spline scene embed wrapper.
 *
 * HOW TO ENABLE A REAL SPLINE SCENE:
 * 1. Run: npm install @splinetool/react-spline
 * 2. Uncomment the import below
 * 3. Uncomment the `<Spline scene={sceneUrl} />` block
 * 4. Pass your scene URL via the `sceneUrl` prop
 *
 * Until then, this component renders `children` (the fallback) directly.
 *
 * Usage:
 *   <SplineWrapper sceneUrl="https://prod.spline.design/YOUR_TOKEN/scene.splinecode">
 *     <NodeNetworkScene />
 *   </SplineWrapper>
 */

// import Spline from '@splinetool/react-spline'; // uncomment after: npm i @splinetool/react-spline

interface SplineWrapperProps {
  /** Spline scene URL - leave undefined to use the fallback children. */
  sceneUrl?: string;
  children: React.ReactNode;
  className?: string;
}

export function SplineWrapper({ children, className = '' }: SplineWrapperProps) {
  // When sceneUrl is provided and the import above is uncommented, replace this
  // return with:
  //
  //   return (
  //     <div className={`relative overflow-hidden ${className}`}>
  //       <Spline scene={sceneUrl} />
  //     </div>
  //   );

  return <div className={className}>{children}</div>;
}
