export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_report_attachments: {
        Row: {
          audit_report_id: string
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          is_certificate: boolean | null
          uploaded_at: string | null
        }
        Insert: {
          audit_report_id: string
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          is_certificate?: boolean | null
          uploaded_at?: string | null
        }
        Update: {
          audit_report_id?: string
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          is_certificate?: boolean | null
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_report_attachments_audit_report_id_fkey"
            columns: ["audit_report_id"]
            isOneToOne: false
            referencedRelation: "audit_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_reports: {
        Row: {
          created_at: string | null
          date: string
          details: string | null
          id: string
          inspector_id: string
          product_id: string
          status: string
          summary: string
        }
        Insert: {
          created_at?: string | null
          date: string
          details?: string | null
          id?: string
          inspector_id: string
          product_id: string
          status: string
          summary: string
        }
        Update: {
          created_at?: string | null
          date?: string
          details?: string | null
          id?: string
          inspector_id?: string
          product_id?: string
          status?: string
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_reports_inspector_id_fkey"
            columns: ["inspector_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_reports_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      bid_documents: {
        Row: {
          bid_id: string
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          uploaded_at: string | null
        }
        Insert: {
          bid_id: string
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          uploaded_at?: string | null
        }
        Update: {
          bid_id?: string
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bid_documents_bid_id_fkey"
            columns: ["bid_id"]
            isOneToOne: false
            referencedRelation: "bids"
            referencedColumns: ["id"]
          },
        ]
      }
      bids: {
        Row: {
          created_at: string | null
          currency: string
          delivery_time: string
          description: string | null
          id: string
          price: number
          seller_id: string
          status: Database["public"]["Enums"]["bid_status"] | null
          tender_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency: string
          delivery_time: string
          description?: string | null
          id?: string
          price: number
          seller_id: string
          status?: Database["public"]["Enums"]["bid_status"] | null
          tender_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string
          delivery_time?: string
          description?: string | null
          id?: string
          price?: number
          seller_id?: string
          status?: Database["public"]["Enums"]["bid_status"] | null
          tender_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bids_tender_id_fkey"
            columns: ["tender_id"]
            isOneToOne: false
            referencedRelation: "tenders"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string | null
          description: string | null
          employees_count: string | null
          established_year: number | null
          id: string
          location: string
          logo_url: string | null
          name: string
          rating: number | null
          reviews_count: number | null
          updated_at: string | null
          verification_status:
            | Database["public"]["Enums"]["company_verification_status"]
            | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          employees_count?: string | null
          established_year?: number | null
          id?: string
          location: string
          logo_url?: string | null
          name: string
          rating?: number | null
          reviews_count?: number | null
          updated_at?: string | null
          verification_status?:
            | Database["public"]["Enums"]["company_verification_status"]
            | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          employees_count?: string | null
          established_year?: number | null
          id?: string
          location?: string
          logo_url?: string | null
          name?: string
          rating?: number | null
          reviews_count?: number | null
          updated_at?: string | null
          verification_status?:
            | Database["public"]["Enums"]["company_verification_status"]
            | null
          website?: string | null
        }
        Relationships: []
      }
      company_categories: {
        Row: {
          category_id: string
          company_id: string
        }
        Insert: {
          category_id: string
          company_id: string
        }
        Update: {
          category_id?: string
          company_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_categories_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      product_certifications: {
        Row: {
          expiry_date: string | null
          file_url: string
          id: string
          issued_date: string | null
          name: string
          product_id: string
        }
        Insert: {
          expiry_date?: string | null
          file_url: string
          id?: string
          issued_date?: string | null
          name: string
          product_id: string
        }
        Update: {
          expiry_date?: string | null
          file_url?: string
          id?: string
          issued_date?: string | null
          name?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_certifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_images: {
        Row: {
          id: string
          image_url: string
          is_primary: boolean | null
          product_id: string
          uploaded_at: string | null
        }
        Insert: {
          id?: string
          image_url: string
          is_primary?: boolean | null
          product_id: string
          uploaded_at?: string | null
        }
        Update: {
          id?: string
          image_url?: string
          is_primary?: boolean | null
          product_id?: string
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_specifications: {
        Row: {
          id: string
          name: string
          product_id: string
          value: string
        }
        Insert: {
          id?: string
          name: string
          product_id: string
          value: string
        }
        Update: {
          id?: string
          name?: string
          product_id?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_specifications_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category_id: string
          created_at: string | null
          description: string
          id: string
          max_order: number | null
          min_order: number | null
          name: string
          price: number | null
          seller_id: string
          subcategory_id: string | null
          unit: string
          updated_at: string | null
        }
        Insert: {
          category_id: string
          created_at?: string | null
          description: string
          id?: string
          max_order?: number | null
          min_order?: number | null
          name: string
          price?: number | null
          seller_id: string
          subcategory_id?: string | null
          unit: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          created_at?: string | null
          description?: string
          id?: string
          max_order?: number | null
          min_order?: number | null
          name?: string
          price?: number | null
          seller_id?: string
          subcategory_id?: string | null
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_id: string | null
          created_at: string | null
          email: string
          id: string
          joined_at: string | null
          location: string | null
          name: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          email: string
          id: string
          joined_at?: string | null
          location?: string | null
          name: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          joined_at?: string | null
          location?: string | null
          name?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          company_id: string
          created_at: string | null
          id: string
          rating: number
          reviewer_id: string
        }
        Insert: {
          comment?: string | null
          company_id: string
          created_at?: string | null
          id?: string
          rating: number
          reviewer_id: string
        }
        Update: {
          comment?: string | null
          company_id?: string
          created_at?: string | null
          id?: string
          rating?: number
          reviewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subcategories: {
        Row: {
          category_id: string
          created_at: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          category_id: string
          created_at?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      tender_attachments: {
        Row: {
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          tender_id: string
          uploaded_at: string | null
        }
        Insert: {
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          tender_id: string
          uploaded_at?: string | null
        }
        Update: {
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          tender_id?: string
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tender_attachments_tender_id_fkey"
            columns: ["tender_id"]
            isOneToOne: false
            referencedRelation: "tenders"
            referencedColumns: ["id"]
          },
        ]
      }
      tender_specifications: {
        Row: {
          id: string
          name: string
          tender_id: string
          value: string
        }
        Insert: {
          id?: string
          name: string
          tender_id: string
          value: string
        }
        Update: {
          id?: string
          name?: string
          tender_id?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "tender_specifications_tender_id_fkey"
            columns: ["tender_id"]
            isOneToOne: false
            referencedRelation: "tenders"
            referencedColumns: ["id"]
          },
        ]
      }
      tenders: {
        Row: {
          budget: number | null
          buyer_id: string
          category_id: string
          created_at: string | null
          currency: string | null
          deadline: string
          description: string
          has_quality_requirements: boolean | null
          id: string
          quantity: string
          requires_audit: boolean | null
          status: Database["public"]["Enums"]["tender_status"] | null
          subcategory_id: string | null
          title: string
          unit: string
          updated_at: string | null
        }
        Insert: {
          budget?: number | null
          buyer_id: string
          category_id: string
          created_at?: string | null
          currency?: string | null
          deadline: string
          description: string
          has_quality_requirements?: boolean | null
          id?: string
          quantity: string
          requires_audit?: boolean | null
          status?: Database["public"]["Enums"]["tender_status"] | null
          subcategory_id?: string | null
          title: string
          unit: string
          updated_at?: string | null
        }
        Update: {
          budget?: number | null
          buyer_id?: string
          category_id?: string
          created_at?: string | null
          currency?: string | null
          deadline?: string
          description?: string
          has_quality_requirements?: boolean | null
          id?: string
          quantity?: string
          requires_audit?: boolean | null
          status?: Database["public"]["Enums"]["tender_status"] | null
          subcategory_id?: string | null
          title?: string
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenders_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenders_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenders_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      bid_status: "pending" | "accepted" | "rejected" | "awarded"
      company_verification_status: "pending" | "verified" | "rejected"
      tender_status: "active" | "closed" | "awarded" | "cancelled"
      user_role: "buyer" | "seller" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
