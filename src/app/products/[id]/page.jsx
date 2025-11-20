/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/slice/productsSlice';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
};

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const textItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    if (!items || items.length === 0) dispatch(fetchProducts());
  }, [dispatch, items]);

  const product = items?.find((p) => Number(p.id) === Number(id));
  if (!product) return <p className="p-8 text-center">Loading product...</p>;

  const saving = product.price && product.offerPrice ? Math.round(((product.price - product.offerPrice) / product.price) * 100) : 0;

  return (
    <div className="bg-secondary/5 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left: Image */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            <motion.div variants={imageVariants} className="w-full rounded-2xl overflow-hidden border bg-white shadow-sm">
              <img src={product.img} alt={product.title} className="w-full h-[420px] object-contain bg-white" />
            </motion.div>

            <motion.div className="mt-6" variants={textContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={textItem} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                {product.special}
              </motion.p>

              <motion.h1 variants={textItem} className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                {product.title}
              </motion.h1>

              <motion.div variants={textItem} className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="px-2 py-1 rounded bg-white/60">{product.category}</span>
                <span className="px-2 py-1 rounded bg-white/60">{product.type}</span>
                <span className="px-2 py-1 rounded bg-white/60">{product.format} • {product.pages} pages</span>
              </motion.div>

              <motion.p variants={textItem} className="mt-5 text-base md:text-lg text-slate-700">
                {product.description}
              </motion.p>

              <motion.div variants={textItem} className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-2xl md:text-3xl font-extrabold">৳{product.offerPrice}</p>
                    <p className="text-sm text-slate-500 line-through">৳{product.price}</p>
                    {saving > 0 && <p className="text-sm text-emerald-600">Save {saving}%</p>}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href={product.link ?? '#'} target="_blank" className="inline-flex">
                    <Button aria-label="Buy now" className="px-6 py-3">
                      Buy now
                    </Button>
                  </Link>

                  <button
                    onClick={() => window.navigator.clipboard?.writeText(product.link ?? '')}
                    className="inline-flex items-center justify-center px-4  rounded-lg border"
                    aria-label="Copy link"
                    title="Copy product link"
                  >
                    Share
                  </button>
                </div>
              </motion.div>

              <motion.div variants={textItem} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat label="Rating" value={`${product.rating ?? '-'} ⭐`} />
                <Stat label="Downloads" value={product.downloads ?? '-'} />
                <Stat label="Format" value={product.format ?? '-'} />
                <Stat label="Pages" value={product.pages ?? '-'} />
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right: Sticky sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">Buy this product</p>
                  <p className="text-sm text-slate-500">Instant download after purchase</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">৳{product.offerPrice}</p>
                  <p className="text-sm text-slate-500 line-through">৳{product.price}</p>
                </div>
              </div>

              <div className="mt-5">
                <Link href={product.link ?? '#'} target="_blank" className="w-full inline-block">
                  <Button className="w-full py-3">Proceed to Buy</Button>
                </Link>
                <div className="mt-3 text-center text-sm text-slate-600">Secure payment • 30-day refund</div>
              </div>

              <div className="mt-6 border-t pt-4 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Format</span>
                  <span>{product.format}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Pages</span>
                  <span>{product.pages}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Downloads</span>
                  <span>{product.downloads}</span>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </div>
  );
};

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-white border p-3 text-center">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

export default Page;
