import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/TextArea";
import { Button } from "../components/ui/Button";
import { ContentEntry } from "../types/Types";
import {
  Music2,
  CalendarDays,
  Tags,
  Save,
  Youtube,
  Music,
} from "lucide-react";

const MusicSEODashboard = () => {
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  const [form, setForm] = useState<ContentEntry>({
    title: "",
    keywords: "",
    youtubeDescription: "",
    spotifyDescription: "",
    appleDescription: "",
    publishDate: "",
  });

  const addEntry = () => {
    setEntries([...entries, form]);
    setForm({
      title: "",
      keywords: "",
      youtubeDescription: "",
      spotifyDescription: "",
      appleDescription: "",
      publishDate: "",
    });
  };
  // handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const exportToCSV = () => {
    const headers = Object.keys(entries[0] || {}).join(",");
    const rows = entries
      .map((entry) =>
        Object.values(entry)
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "seo-content.csv");
    link.click();
  };

  const exportToExcel = () => {
  if (!entries || entries.length === 0) return;

  // Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(entries);

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Trigger download
  XLSX.writeFile(workbook, "seo-content.xlsx");
};

  return (
    <div className="p-6 max-w-4xl mx-auto mt-[100px]">
      <h1 className="text-3xl font-bold mb-4 text-center">
        🎵 Music SEO Content Manager
      </h1>

      <Card className="mt-auto">
        <CardContent className="space-y-4 p-4">
          <Input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <Input
            name="keywords"
            placeholder="Keywords (comma-separated)"
            value={form.keywords}
            onChange={handleChange}
          />
          <Textarea
            name="youtubeDescription"
            placeholder="YouTube Description"
            value={form.youtubeDescription}
            onChange={handleChange}
          />
          <Textarea
            name="spotifyDescription"
            placeholder="Spotify Description"
            value={form.spotifyDescription}
            onChange={handleChange}
          />
          <Textarea
            name="appleDescription"
            placeholder="Apple Music Description"
            value={form.appleDescription}
            onChange={handleChange}
          />
          <Input
            name="publishDate"
            type="date"
            value={form.publishDate}
            onChange={handleChange}
          />

          <div className="text-center">
            <Button onClick={addEntry} className="w-1/2">
              Add Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 mt-6">
        {entries.map((entry, idx) => (
          <Card key={idx} className="shadow-sm border">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{entry.title}</h2>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {entry.publishDate}
                </div>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Tags className="w-4 h-4 mr-1" />
                {entry.keywords}
              </div>

              <div className="grid gap-1 text-sm text-seo-700">
                <div className="flex items-start">
                  <Youtube className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                  <span>{entry.youtubeDescription.slice(0, 60)}...</span>
                </div>
                <div className="flex items-start">
                  <Music className="w-4 h-4 mr-2 mt-0.5 text-green-500" />
                  <span>{entry.spotifyDescription.slice(0, 60)}...</span>
                </div>
                <div className="flex items-start">
                  <Music2 className="w-4 h-4 mr-2 mt-0.5 text-blue-500" />
                  <span>{entry.appleDescription.slice(0, 60)}...</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {entries.length > 0 && (
        <div className="flex space-x-6 mt-6 justify-center"><Button onClick={exportToCSV} className="w-1/2">
          <Save /> Export to CSV
        </Button><Button onClick={exportToExcel} className="w-1/2" >
            <Save /> Export to Excel
          </Button></div>
      )}
    </div>
  );
};

export default MusicSEODashboard;
